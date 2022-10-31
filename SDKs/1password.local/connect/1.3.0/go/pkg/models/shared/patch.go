package shared




type PatchOpEnum string

const (
    PatchOpEnumAdd PatchOpEnum = "add"
PatchOpEnumRemove PatchOpEnum = "remove"
PatchOpEnumReplace PatchOpEnum = "replace"
)


type Patch struct {
    Op PatchOpEnum `json:"op"`
    Path string `json:"path"`
    Value map[string]interface{} `json:"value,omitempty"`
    
}

