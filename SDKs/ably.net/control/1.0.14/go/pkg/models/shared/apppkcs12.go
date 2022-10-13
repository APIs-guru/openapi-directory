package shared

type AppPkcs12P12File struct {
	Content []byte `multipartForm:"content"`
	P12File string `multipartForm:"name=p12File"`
}

type AppPkcs12 struct {
	P12File AppPkcs12P12File `multipartForm:"file"`
	P12Pass string           `multipartForm:"name=p12Pass"`
}
