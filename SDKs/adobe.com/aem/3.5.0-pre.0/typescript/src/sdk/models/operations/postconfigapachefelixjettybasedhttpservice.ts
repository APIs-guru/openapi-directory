import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigApacheFelixJettyBasedHttpServiceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.clientcertificate" })
  orgApacheFelixHttpsClientcertificate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.clientcertificate@TypeHint" })
  orgApacheFelixHttpsClientcertificateAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.enable" })
  orgApacheFelixHttpsEnable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.enable@TypeHint" })
  orgApacheFelixHttpsEnableAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore" })
  orgApacheFelixHttpsKeystore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key" })
  orgApacheFelixHttpsKeystoreKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key.password" })
  orgApacheFelixHttpsKeystoreKeyPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key.password@TypeHint" })
  orgApacheFelixHttpsKeystoreKeyPasswordAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key@TypeHint" })
  orgApacheFelixHttpsKeystoreKeyAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.password" })
  orgApacheFelixHttpsKeystorePassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.password@TypeHint" })
  orgApacheFelixHttpsKeystorePasswordAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore@TypeHint" })
  orgApacheFelixHttpsKeystoreAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.nio" })
  orgApacheFelixHttpsNio?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.nio@TypeHint" })
  orgApacheFelixHttpsNioAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore" })
  orgApacheFelixHttpsTruststore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore.password" })
  orgApacheFelixHttpsTruststorePassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore.password@TypeHint" })
  orgApacheFelixHttpsTruststorePasswordAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore@TypeHint" })
  orgApacheFelixHttpsTruststoreAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.osgi.service.http.port.secure" })
  orgOsgiServiceHttpPortSecure?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=org.osgi.service.http.port.secure@TypeHint" })
  orgOsgiServiceHttpPortSecureAtTypeHint?: string;
}


export class PostConfigApacheFelixJettyBasedHttpServiceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigApacheFelixJettyBasedHttpServiceQueryParams;
}


export class PostConfigApacheFelixJettyBasedHttpServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
