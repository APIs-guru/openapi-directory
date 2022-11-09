import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkProfileTypeEnum } from "./networkprofiletypeenum";


export class ListNetworkProfilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=type" })
  type?: NetworkProfileTypeEnum;
}
