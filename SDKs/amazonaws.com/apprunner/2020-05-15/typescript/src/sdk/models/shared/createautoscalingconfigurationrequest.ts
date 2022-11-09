import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateAutoScalingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingConfigurationName" })
  autoScalingConfigurationName: string;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: number;

  @Metadata({ data: "json, name=MaxSize" })
  maxSize?: number;

  @Metadata({ data: "json, name=MinSize" })
  minSize?: number;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
