import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Builder
/** 
 * The builder used to build the custom platform.
**/
export class Builder extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;
}
