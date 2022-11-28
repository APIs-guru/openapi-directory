import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateCustomDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=EnableWWWSubdomain" })
  enableWwwSubdomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
