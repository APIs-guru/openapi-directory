package shared




type ActionCategoryEnum string

const (
    ActionCategoryEnumSource ActionCategoryEnum = "Source"
ActionCategoryEnumBuild ActionCategoryEnum = "Build"
ActionCategoryEnumDeploy ActionCategoryEnum = "Deploy"
ActionCategoryEnumTest ActionCategoryEnum = "Test"
ActionCategoryEnumInvoke ActionCategoryEnum = "Invoke"
ActionCategoryEnumApproval ActionCategoryEnum = "Approval"
)


