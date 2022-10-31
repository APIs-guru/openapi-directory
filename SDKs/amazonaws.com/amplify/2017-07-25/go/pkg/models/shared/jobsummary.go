package shared

import (
"time")

type JobSummary struct {
    CommitID string `json:"commitId"`
    CommitMessage string `json:"commitMessage"`
    CommitTime time.Time `json:"commitTime"`
    EndTime *time.Time `json:"endTime,omitempty"`
    JobArn string `json:"jobArn"`
    JobID string `json:"jobId"`
    JobType JobTypeEnum `json:"jobType"`
    StartTime time.Time `json:"startTime"`
    Status JobStatusEnum `json:"status"`
    
}

