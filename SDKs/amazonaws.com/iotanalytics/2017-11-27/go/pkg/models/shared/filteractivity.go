package shared



type FilterActivity struct {
    Filter string `json:"filter"`
    Name string `json:"name"`
    Next *string `json:"next,omitempty"`
    
}

