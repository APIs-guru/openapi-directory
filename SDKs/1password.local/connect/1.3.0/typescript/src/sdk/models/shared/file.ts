import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSection
/** 
 * For files that are in a section, this field describes the section.
**/
export class FileSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=content_path" })
  contentPath?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: FileSection;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


export class FileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: FileSection;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
