import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateCustomDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
