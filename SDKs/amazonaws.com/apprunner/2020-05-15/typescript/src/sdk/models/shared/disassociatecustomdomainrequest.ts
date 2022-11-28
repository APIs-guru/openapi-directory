import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateCustomDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
