import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPointDescription } from "./accesspointdescription";



export class DescribeAccessPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessPoints", elemType: AccessPointDescription })
  accessPoints?: AccessPointDescription[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
