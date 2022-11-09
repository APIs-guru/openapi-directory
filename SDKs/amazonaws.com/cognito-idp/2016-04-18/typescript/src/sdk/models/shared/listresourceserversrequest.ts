import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListResourceServersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}
