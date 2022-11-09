import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Filters } from "./filters";


export class ListCertificatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateStatuses" })
  certificateStatuses?: CertificateStatusEnum[];

  @Metadata({ data: "json, name=Includes" })
  includes?: Filters;

  @Metadata({ data: "json, name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
