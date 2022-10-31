package shared




type TopicStatusEnum string

const (
    TopicStatusEnumRegistered TopicStatusEnum = "Registered"
TopicStatusEnumTopicNotFound TopicStatusEnum = "Topic not found"
TopicStatusEnumFailed TopicStatusEnum = "Failed"
TopicStatusEnumDeleted TopicStatusEnum = "Deleted"
)


