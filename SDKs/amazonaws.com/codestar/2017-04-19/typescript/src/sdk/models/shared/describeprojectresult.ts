import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatus } from "./projectstatus";



export class DescribeProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=createdTimeStamp" })
  createdTimeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectTemplateId" })
  projectTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=stackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProjectStatus;
}
