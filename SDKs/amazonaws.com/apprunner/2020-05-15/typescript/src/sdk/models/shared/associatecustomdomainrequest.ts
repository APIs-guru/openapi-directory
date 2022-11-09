import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateCustomDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=EnableWWWSubdomain" })
  enableWwwSubdomain?: boolean;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn: string;
}
