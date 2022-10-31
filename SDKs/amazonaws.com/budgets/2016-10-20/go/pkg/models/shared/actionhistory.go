package shared

import (
"time")

type ActionHistory struct {
    ActionHistoryDetails ActionHistoryDetails `json:"ActionHistoryDetails"`
    EventType EventTypeEnum `json:"EventType"`
    Status ActionStatusEnum `json:"Status"`
    Timestamp time.Time `json:"Timestamp"`
    
}

