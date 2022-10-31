package shared




type AuthDecisionEnum string

const (
    AuthDecisionEnumAllowed AuthDecisionEnum = "ALLOWED"
AuthDecisionEnumExplicitDeny AuthDecisionEnum = "EXPLICIT_DENY"
AuthDecisionEnumImplicitDeny AuthDecisionEnum = "IMPLICIT_DENY"
)


