package shared

type Logger struct {
	Component LoggerComponentEnum `json:"Component"`
	ID        string              `json:"Id"`
	Level     LoggerLevelEnum     `json:"Level"`
	Space     *int64              `json:"Space"`
	Type      LoggerTypeEnum      `json:"Type"`
}
