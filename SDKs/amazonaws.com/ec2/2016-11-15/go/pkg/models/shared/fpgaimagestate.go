package shared

// FpgaImageState
// Describes the state of the bitstream generation process for an Amazon FPGA image (AFI).
type FpgaImageState struct {
	Code    *FpgaImageStateCodeEnum
	Message *string
}
