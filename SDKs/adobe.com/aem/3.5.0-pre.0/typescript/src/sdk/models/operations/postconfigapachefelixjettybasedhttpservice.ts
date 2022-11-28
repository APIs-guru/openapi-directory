import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigApacheFelixJettyBasedHttpServiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.clientcertificate" })
  orgApacheFelixHttpsClientcertificate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.clientcertificate@TypeHint" })
  orgApacheFelixHttpsClientcertificateAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.enable" })
  orgApacheFelixHttpsEnable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.enable@TypeHint" })
  orgApacheFelixHttpsEnableAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore" })
  orgApacheFelixHttpsKeystore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key" })
  orgApacheFelixHttpsKeystoreKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key.password" })
  orgApacheFelixHttpsKeystoreKeyPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key.password@TypeHint" })
  orgApacheFelixHttpsKeystoreKeyPasswordAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.key@TypeHint" })
  orgApacheFelixHttpsKeystoreKeyAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.password" })
  orgApacheFelixHttpsKeystorePassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore.password@TypeHint" })
  orgApacheFelixHttpsKeystorePasswordAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.keystore@TypeHint" })
  orgApacheFelixHttpsKeystoreAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.nio" })
  orgApacheFelixHttpsNio?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.nio@TypeHint" })
  orgApacheFelixHttpsNioAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore" })
  orgApacheFelixHttpsTruststore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore.password" })
  orgApacheFelixHttpsTruststorePassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore.password@TypeHint" })
  orgApacheFelixHttpsTruststorePasswordAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.apache.felix.https.truststore@TypeHint" })
  orgApacheFelixHttpsTruststoreAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.osgi.service.http.port.secure" })
  orgOsgiServiceHttpPortSecure?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org.osgi.service.http.port.secure@TypeHint" })
  orgOsgiServiceHttpPortSecureAtTypeHint?: string;
}


export class PostConfigApacheFelixJettyBasedHttpServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigApacheFelixJettyBasedHttpServiceQueryParams;
}


export class PostConfigApacheFelixJettyBasedHttpServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
