package shared




type ChatItemTypeEnum string

const (
    ChatItemTypeEnumTyping ChatItemTypeEnum = "TYPING"
ChatItemTypeEnumParticipantJoined ChatItemTypeEnum = "PARTICIPANT_JOINED"
ChatItemTypeEnumParticipantLeft ChatItemTypeEnum = "PARTICIPANT_LEFT"
ChatItemTypeEnumChatEnded ChatItemTypeEnum = "CHAT_ENDED"
ChatItemTypeEnumTransferSucceeded ChatItemTypeEnum = "TRANSFER_SUCCEEDED"
ChatItemTypeEnumTransferFailed ChatItemTypeEnum = "TRANSFER_FAILED"
ChatItemTypeEnumMessage ChatItemTypeEnum = "MESSAGE"
ChatItemTypeEnumEvent ChatItemTypeEnum = "EVENT"
ChatItemTypeEnumAttachment ChatItemTypeEnum = "ATTACHMENT"
ChatItemTypeEnumConnectionAck ChatItemTypeEnum = "CONNECTION_ACK"
)


