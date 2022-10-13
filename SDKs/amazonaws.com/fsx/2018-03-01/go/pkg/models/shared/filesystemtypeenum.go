package shared

type FileSystemTypeEnum string

const (
	FileSystemTypeEnumWindows FileSystemTypeEnum = "WINDOWS"
	FileSystemTypeEnumLustre  FileSystemTypeEnum = "LUSTRE"
	FileSystemTypeEnumOntap   FileSystemTypeEnum = "ONTAP"
)
