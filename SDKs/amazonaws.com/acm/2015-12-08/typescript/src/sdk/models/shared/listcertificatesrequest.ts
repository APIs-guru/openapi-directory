import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";
import { Filters } from "./filters";



export class ListCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateStatuses" })
  certificateStatuses?: CertificateStatusEnum[];

  @SpeakeasyMetadata({ data: "json, name=Includes" })
  includes?: Filters;

  @SpeakeasyMetadata({ data: "json, name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
