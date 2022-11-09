import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridSessionStatusEnum } from "./testgridsessionstatusenum";


export class ListTestGridSessionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=creationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=endTimeAfter" })
  endTimeAfter?: Date;

  @Metadata({ data: "json, name=endTimeBefore" })
  endTimeBefore?: Date;

  @Metadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=status" })
  status?: TestGridSessionStatusEnum;
}
