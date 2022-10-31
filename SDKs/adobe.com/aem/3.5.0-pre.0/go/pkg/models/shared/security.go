package shared

type SchemeAemAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	AemAuth SchemeAemAuth `security:"scheme,type=http,subtype=basic"`
}
