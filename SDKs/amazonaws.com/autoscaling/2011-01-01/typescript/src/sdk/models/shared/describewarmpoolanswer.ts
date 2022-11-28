import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
import { WarmPoolConfiguration } from "./warmpoolconfiguration";



export class DescribeWarmPoolAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  warmPoolConfiguration?: WarmPoolConfiguration;
}
