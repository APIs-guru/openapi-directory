package shared

type SchemeAemAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type Security struct {
	AemAuth SchemeAemAuth `security:"scheme,type=http,subtype=basic"`
}
