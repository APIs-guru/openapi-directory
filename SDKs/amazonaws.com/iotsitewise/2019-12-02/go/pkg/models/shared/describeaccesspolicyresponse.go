package shared

import (
"time")

type DescribeAccessPolicyResponse struct {
    AccessPolicyArn string `json:"accessPolicyArn"`
    AccessPolicyCreationDate time.Time `json:"accessPolicyCreationDate"`
    AccessPolicyID string `json:"accessPolicyId"`
    AccessPolicyIdentity Identity `json:"accessPolicyIdentity"`
    AccessPolicyLastUpdateDate time.Time `json:"accessPolicyLastUpdateDate"`
    AccessPolicyPermission PermissionEnum `json:"accessPolicyPermission"`
    AccessPolicyResource Resource `json:"accessPolicyResource"`
    
}

