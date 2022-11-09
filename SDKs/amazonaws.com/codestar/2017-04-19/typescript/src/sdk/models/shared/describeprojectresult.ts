import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectStatus } from "./projectstatus";


export class DescribeProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=createdTimeStamp" })
  createdTimeStamp?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectTemplateId" })
  projectTemplateId?: string;

  @Metadata({ data: "json, name=stackId" })
  stackId?: string;

  @Metadata({ data: "json, name=status" })
  status?: ProjectStatus;
}
