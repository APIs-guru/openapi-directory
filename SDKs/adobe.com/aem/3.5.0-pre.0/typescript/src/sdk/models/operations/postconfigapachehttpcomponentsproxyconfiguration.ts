import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConfigApacheHttpComponentsProxyConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.enabled" })
  proxyEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.enabled@TypeHint" })
  proxyEnabledAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.exceptions" })
  proxyExceptions?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.exceptions@TypeHint" })
  proxyExceptionsAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.host" })
  proxyHost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.host@TypeHint" })
  proxyHostAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.password" })
  proxyPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.password@TypeHint" })
  proxyPasswordAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.port" })
  proxyPort?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.port@TypeHint" })
  proxyPortAtTypeHint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.user" })
  proxyUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=proxy.user@TypeHint" })
  proxyUserAtTypeHint?: string;
}


export class PostConfigApacheHttpComponentsProxyConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostConfigApacheHttpComponentsProxyConfigurationQueryParams;
}


export class PostConfigApacheHttpComponentsProxyConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
