import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListApiDestinationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionArn" })
  connectionArn?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
