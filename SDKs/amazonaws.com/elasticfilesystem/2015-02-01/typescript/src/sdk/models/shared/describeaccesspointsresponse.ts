import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessPointDescription } from "./accesspointdescription";


export class DescribeAccessPointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessPoints", elemType: shared.AccessPointDescription })
  accessPoints?: AccessPointDescription[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
