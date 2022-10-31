package shared

import (
"time")

type Webhook struct {
    BranchName string `json:"branchName"`
    CreateTime time.Time `json:"createTime"`
    Description string `json:"description"`
    UpdateTime time.Time `json:"updateTime"`
    WebhookArn string `json:"webhookArn"`
    WebhookID string `json:"webhookId"`
    WebhookURL string `json:"webhookUrl"`
    
}

