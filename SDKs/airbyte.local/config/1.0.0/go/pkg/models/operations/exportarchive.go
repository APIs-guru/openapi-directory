package operations

type ExportArchiveResponse struct {
	AirbyteArchive []byte
	ContentType    string
	StatusCode     int64
}
