package shared



type ErrorDetails struct {
    Code ErrorCodeEnum `json:"code"`
    Details []DetailedError `json:"details,omitempty"`
    Message string `json:"message"`
    
}

