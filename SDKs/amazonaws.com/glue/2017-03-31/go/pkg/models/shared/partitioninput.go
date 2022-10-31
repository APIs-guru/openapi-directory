package shared

import (
"time")

type PartitionInput struct {
    LastAccessTime *time.Time `json:"LastAccessTime,omitempty"`
    LastAnalyzedTime *time.Time `json:"LastAnalyzedTime,omitempty"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    StorageDescriptor *StorageDescriptor `json:"StorageDescriptor,omitempty"`
    Values []string `json:"Values,omitempty"`
    
}

