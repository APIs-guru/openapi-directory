package shared

// Tag
// A structure that represents user-provided metadata that can be associated with an IAM resource. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the <i>IAM User Guide</i>.
type Tag struct {
	Key   string
	Value string
}
