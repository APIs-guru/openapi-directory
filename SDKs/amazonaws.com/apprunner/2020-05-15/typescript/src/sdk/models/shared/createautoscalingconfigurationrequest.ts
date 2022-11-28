import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateAutoScalingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingConfigurationName" })
  autoScalingConfigurationName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxSize" })
  maxSize?: number;

  @SpeakeasyMetadata({ data: "json, name=MinSize" })
  minSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
