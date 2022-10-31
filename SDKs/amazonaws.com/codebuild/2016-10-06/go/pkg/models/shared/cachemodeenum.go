package shared

type CacheModeEnum string

const (
	CacheModeEnumLocalDockerLayerCache CacheModeEnum = "LOCAL_DOCKER_LAYER_CACHE"
	CacheModeEnumLocalSourceCache      CacheModeEnum = "LOCAL_SOURCE_CACHE"
	CacheModeEnumLocalCustomCache      CacheModeEnum = "LOCAL_CUSTOM_CACHE"
)
