package shared

type Item struct {
	AbsoluteTime    *string              `json:"AbsoluteTime"`
	Attachments     []AttachmentItem     `json:"Attachments"`
	Content         *string              `json:"Content"`
	ContentType     *string              `json:"ContentType"`
	DisplayName     *string              `json:"DisplayName"`
	ID              *string              `json:"Id"`
	ParticipantID   *string              `json:"ParticipantId"`
	ParticipantRole *ParticipantRoleEnum `json:"ParticipantRole"`
	Type            *ChatItemTypeEnum    `json:"Type"`
}
