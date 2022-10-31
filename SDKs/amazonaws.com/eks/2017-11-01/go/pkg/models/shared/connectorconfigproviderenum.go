package shared




type ConnectorConfigProviderEnum string

const (
    ConnectorConfigProviderEnumEksAnywhere ConnectorConfigProviderEnum = "EKS_ANYWHERE"
ConnectorConfigProviderEnumAnthos ConnectorConfigProviderEnum = "ANTHOS"
ConnectorConfigProviderEnumGke ConnectorConfigProviderEnum = "GKE"
ConnectorConfigProviderEnumAks ConnectorConfigProviderEnum = "AKS"
ConnectorConfigProviderEnumOpenshift ConnectorConfigProviderEnum = "OPENSHIFT"
ConnectorConfigProviderEnumTanzu ConnectorConfigProviderEnum = "TANZU"
ConnectorConfigProviderEnumRancher ConnectorConfigProviderEnum = "RANCHER"
ConnectorConfigProviderEnumEc2 ConnectorConfigProviderEnum = "EC2"
ConnectorConfigProviderEnumOther ConnectorConfigProviderEnum = "OTHER"
)


