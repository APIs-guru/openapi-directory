package shared

// Encryption
// The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.
type Encryption struct {
	InitializationVector *string `json:"InitializationVector,omitempty"`
	Key                  *string `json:"Key,omitempty"`
	KeyMd5               *string `json:"KeyMd5,omitempty"`
	Mode                 *string `json:"Mode,omitempty"`
}
