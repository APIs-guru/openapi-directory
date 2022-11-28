import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=apnsUseSandboxEndpoint" })
  apnsUseSandboxEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AppResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}
