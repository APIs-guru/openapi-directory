package operations

type PostTruststorePkcs12RequestBodyTruststoreP12 struct {
	Content       []byte `multipartForm:"content"`
	TruststoreP12 string `multipartForm:"name=truststore.p12"`
}

type PostTruststorePkcs12RequestBody struct {
	TruststoreP12 *PostTruststorePkcs12RequestBodyTruststoreP12 `multipartForm:"file"`
}

type PostTruststorePkcs12Request struct {
	Request *PostTruststorePkcs12RequestBody `request:"mediaType=multipart/form-data"`
}

type PostTruststorePkcs12Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
