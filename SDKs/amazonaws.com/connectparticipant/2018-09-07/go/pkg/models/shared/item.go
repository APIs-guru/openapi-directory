package shared

// Item
// An item - message or event - that has been sent.
type Item struct {
	AbsoluteTime    *string              `json:"AbsoluteTime,omitempty"`
	Attachments     []AttachmentItem     `json:"Attachments,omitempty"`
	Content         *string              `json:"Content,omitempty"`
	ContentType     *string              `json:"ContentType,omitempty"`
	DisplayName     *string              `json:"DisplayName,omitempty"`
	ID              *string              `json:"Id,omitempty"`
	ParticipantID   *string              `json:"ParticipantId,omitempty"`
	ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole,omitempty"`
	Type            *ChatItemTypeEnum    `json:"Type,omitempty"`
}
