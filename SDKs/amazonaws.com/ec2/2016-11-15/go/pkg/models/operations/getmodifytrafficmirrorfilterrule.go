package operations

import (
"openapi/pkg/models/shared")


type GetModifyTrafficMirrorFilterRuleActionEnum string

const (
    GetModifyTrafficMirrorFilterRuleActionEnumModifyTrafficMirrorFilterRule GetModifyTrafficMirrorFilterRuleActionEnum = "ModifyTrafficMirrorFilterRule"
)


type GetModifyTrafficMirrorFilterRuleDestinationPortRange struct {
    FromPort *int64 `queryParam:"name=FromPort"`
    ToPort *int64 `queryParam:"name=ToPort"`
    
}


type GetModifyTrafficMirrorFilterRuleRuleActionEnum string

const (
    GetModifyTrafficMirrorFilterRuleRuleActionEnumAccept GetModifyTrafficMirrorFilterRuleRuleActionEnum = "accept"
GetModifyTrafficMirrorFilterRuleRuleActionEnumReject GetModifyTrafficMirrorFilterRuleRuleActionEnum = "reject"
)


type GetModifyTrafficMirrorFilterRuleSourcePortRange struct {
    FromPort *int64 `queryParam:"name=FromPort"`
    ToPort *int64 `queryParam:"name=ToPort"`
    
}


type GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum string

const (
    GetModifyTrafficMirrorFilterRuleTrafficDirectionEnumIngress GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum = "ingress"
GetModifyTrafficMirrorFilterRuleTrafficDirectionEnumEgress GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum = "egress"
)



type GetModifyTrafficMirrorFilterRuleVersionEnum string

const (
    GetModifyTrafficMirrorFilterRuleVersionEnumTwoThousandAndSixteen1115 GetModifyTrafficMirrorFilterRuleVersionEnum = "2016-11-15"
)


type GetModifyTrafficMirrorFilterRuleQueryParams struct {
    Action GetModifyTrafficMirrorFilterRuleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Description *string `queryParam:"style=form,explode=true,name=Description"`
    DestinationCidrBlock *string `queryParam:"style=form,explode=true,name=DestinationCidrBlock"`
    DestinationPortRange *GetModifyTrafficMirrorFilterRuleDestinationPortRange `queryParam:"style=form,explode=true,name=DestinationPortRange"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    Protocol *int64 `queryParam:"style=form,explode=true,name=Protocol"`
    RemoveField []shared.TrafficMirrorFilterRuleFieldEnum `queryParam:"style=form,explode=true,name=RemoveField"`
    RuleAction *GetModifyTrafficMirrorFilterRuleRuleActionEnum `queryParam:"style=form,explode=true,name=RuleAction"`
    RuleNumber *int64 `queryParam:"style=form,explode=true,name=RuleNumber"`
    SourceCidrBlock *string `queryParam:"style=form,explode=true,name=SourceCidrBlock"`
    SourcePortRange *GetModifyTrafficMirrorFilterRuleSourcePortRange `queryParam:"style=form,explode=true,name=SourcePortRange"`
    TrafficDirection *GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum `queryParam:"style=form,explode=true,name=TrafficDirection"`
    TrafficMirrorFilterRuleID string `queryParam:"style=form,explode=true,name=TrafficMirrorFilterRuleId"`
    Version GetModifyTrafficMirrorFilterRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyTrafficMirrorFilterRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyTrafficMirrorFilterRuleRequest struct {
    QueryParams GetModifyTrafficMirrorFilterRuleQueryParams 
    Headers GetModifyTrafficMirrorFilterRuleHeaders 
    
}

type GetModifyTrafficMirrorFilterRuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

