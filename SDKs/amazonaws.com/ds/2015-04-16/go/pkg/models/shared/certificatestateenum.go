package shared

type CertificateStateEnum string

const (
	CertificateStateEnumRegistering      CertificateStateEnum = "Registering"
	CertificateStateEnumRegistered       CertificateStateEnum = "Registered"
	CertificateStateEnumRegisterFailed   CertificateStateEnum = "RegisterFailed"
	CertificateStateEnumDeregistering    CertificateStateEnum = "Deregistering"
	CertificateStateEnumDeregistered     CertificateStateEnum = "Deregistered"
	CertificateStateEnumDeregisterFailed CertificateStateEnum = "DeregisterFailed"
)
