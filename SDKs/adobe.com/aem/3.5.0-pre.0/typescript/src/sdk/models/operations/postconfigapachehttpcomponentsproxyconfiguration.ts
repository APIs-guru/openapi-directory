import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConfigApacheHttpComponentsProxyConfigurationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.enabled" })
  proxyEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.enabled@TypeHint" })
  proxyEnabledAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.exceptions" })
  proxyExceptions?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.exceptions@TypeHint" })
  proxyExceptionsAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.host" })
  proxyHost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.host@TypeHint" })
  proxyHostAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.password" })
  proxyPassword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.password@TypeHint" })
  proxyPasswordAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.port" })
  proxyPort?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.port@TypeHint" })
  proxyPortAtTypeHint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.user" })
  proxyUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy.user@TypeHint" })
  proxyUserAtTypeHint?: string;
}


export class PostConfigApacheHttpComponentsProxyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostConfigApacheHttpComponentsProxyConfigurationQueryParams;
}


export class PostConfigApacheHttpComponentsProxyConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
