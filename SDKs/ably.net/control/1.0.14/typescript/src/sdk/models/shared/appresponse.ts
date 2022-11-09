import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=apnsUseSandboxEndpoint" })
  apnsUseSandboxEndpoint?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: AppResponseStatusEnum;

  @Metadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}
